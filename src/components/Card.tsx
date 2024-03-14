import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";
import { Project } from "../public";
import { FaArrowRight } from "react-icons/fa6";

const Card = ({ title, link, description, icons }: Project) => {
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const card = useRef(null);

  useEffect(() => {
    if (isCardOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCardOpened]);

  return (
    <Fragment>
      <CardLink
        className={`border-[1px] border-solid border-[#2c0d4a] p-4 xl:p-12 rounded-lg bg-[#08050C] text-[#F2BB30]`} 
        ref={card}
        opened = {isCardOpened}
        layout
        onClick={() => {
          setIsCardOpened(true);
          if (!isCardOpened) {
            setCardDimensions({
              //@ts-ignore
              width: card.current?.clientWidth,
              //@ts-ignore
              height: card.current?.clientHeight
            });
          }
        }}
      >
        <motion.div className="flex mb-1" layout="position">
          {icons.map(([Icon, color]) => (
            <Icon color={color} size={24} className="mr-1"/>
          ))}
        </motion.div>
        <motion.h1 className="text-xl font-bold" layout="position">
          {title}
        </motion.h1>
        {isCardOpened && (
          <div>
            {link ? <p className="font-mono mt-1">Link: <a className ="text-[#61DAFB] visited:text-purple-400 underline" href={link}>GitHub Page</a></p> : <p className="mt-1 font-mono">Link: Closed-Source</p>}
            <div className="text-white">
              {description.split('\n').map((line, i) => (
                <p className="m-3" key={i}>{line}</p> 
              ))}
            </div>
          </div>
        )}
        {!isCardOpened && (
          <p className="text-white mt-8 text-sm flex items-center">See more about this project<FaArrowRight className="ml-1"/></p>
        )}
      </CardLink>
      {isCardOpened && (
        <Fragment>
          <div
            style={{
              width: cardDimensions.width,
              height: cardDimensions.height
            }}
          ></div>
          <CardBackground
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsCardOpened(false)}
          />
        </Fragment>
      )}
    </Fragment>
  );
}

const CardLink = styled(motion.div)<{ opened: boolean }>`
  height: 100%;
  width: 100%;
  ${(props) =>
    props.opened &&
    css`
      width: min(40rem, 95%);
      height: calc(100% - 10rem);
      overflow-y: auto;
      overflow-x: hidden;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      z-index: 20;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
    `}
`;

const CardBackground = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 15;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.7);
`;

export default Card