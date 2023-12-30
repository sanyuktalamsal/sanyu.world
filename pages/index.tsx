import type { NextPage } from 'next'
import React, { useState, useEffect, useReducer, useContext } from 'react'
import Draggable from 'react-draggable';
import Icon from '../components/Icon';
import { DraggableProps } from 'react-draggable';
import { RenderedModalContext, ModalContext } from '../components/ModalContext';
import { createModalStack, modalStackReducer, ModalStack, renderModalStack } from '../components/ModalStack';

const useMousePosition = () => {
  const [
    mousePosition,
    setMousePosition
  ] = useState({ x: null, y: null });
  useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return mousePosition;
};

interface ModalProps {
  defaultPosition: DraggableProps['defaultPosition']
};


/**
 * Welcome to sanyu.world
 */
const WelcomeModal = ({ defaultPosition }: ModalProps) => {
  const renderedCtx = useContext(RenderedModalContext);
  const modalCtx = useContext(ModalContext);
  const mousePosition = useMousePosition();
  const [isDragged, setIsDragged] = useState(false);
  return (
    <Draggable
      defaultPosition={defaultPosition}
      onDrag={() => setIsDragged(true)}
      onStop={() => setIsDragged(false)}
    >
      <div className="absolute z-10 alert-box outer-border scale-down" style={{ "width": "30rem", "backgroundColor": "transparent" }}>
        <div className="inner-border">
          <div className={isDragged ? "invisible bg-transparent" : "bg-white"}>
            <div className="alert-contents" style={{ "paddingLeft": "30px", "paddingRight": "20px" }}>
              <section className="field-row" style={{ "justifyContent": "flexStart" }}>
                <div className="square">
                  <img style={{ width: 60, height: 60 }} src="catpixel3.png" alt="Cat Pixel Image" />
                </div>
                <p className="alert-text" style={{ "paddingLeft": "10px" }}>
                  Welcome to sanyu.world.
                </p>
              </section>
              <section className="field-row" style={{ "justifyContent": "flex-end" }}>
                <button className="btn" onClick={() => modalCtx.dispatch({ type: 'CLOSE_MODAL', id: renderedCtx.id })}>Cancel</button>
                <button className="btn" style={{ "width": "95px" }} onClick={() => modalCtx.dispatch({ type: 'ADD_MODAL', element: <ResumeModal defaultPosition={{ x: mousePosition.x!, y: (mousePosition.y! - 40) }} /> })}>OK</button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

/**
 * You can find my resume and such under the aboutMe
 */
const ResumeModal = ({ defaultPosition }: ModalProps) => {
  const renderedCtx = useContext(RenderedModalContext);
  const modalCtx = useContext(ModalContext);
  const mousePosition = useMousePosition();
  const [isDragged, setIsDragged] = useState(false);

  return (
    <Draggable defaultPosition={defaultPosition}
      onDrag={() => setIsDragged(true)}
      onStop={() => setIsDragged(false)}
    >
      <div className="absolute z-10 alert-box outer-border scale-down" style={{ "width": "30rem", "backgroundColor": "transparent" }}>
        <div className="inner-border">
          <div className={isDragged ? "invisible bg-transparent" : "bg-white"}>
            <div className="alert-contents" style={{ "paddingLeft": "30px", "paddingRight": "20px" }}>
              <section className="field-row" style={{ "justifyContent": "flex-start" }}>
                <div className="square">
                  <img style={{ width: 60, height: 60 }} src="catpixel3.png" alt="Cat Pixel Image" />
                </div>
                <p className="alert-text" style={{ "paddingLeft": "10px" }}>
                  You can find my resume and such in &quot;about&quot;.
                </p>
              </section>
              <section className="field-row" style={{ "justifyContent": "flex-end" }}>
                <button className="btn" onClick={() => modalCtx.dispatch({ type: 'CLOSE_MODAL', id: renderedCtx.id })}>Cancel</button>
                <button className="btn" style={{ "width": "95px" }} onClick={() => modalCtx.dispatch({ type: 'ADD_MODAL', element: <HelloModal defaultPosition={{ x: mousePosition.x!, y: (mousePosition.y! - 40) }} /> })}>OK</button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

/**
 * Go ahead and explore! This site will be updates as time goes on and I gain more experience
 */
const HelloModal = ({ defaultPosition }: ModalProps) => {
  const renderedCtx = useContext(RenderedModalContext);
  const modalCtx = useContext(ModalContext);
  const mousePosition = useMousePosition();
  const [isDragged, setIsDragged] = useState(false);

  return (
    <Draggable defaultPosition={defaultPosition}
      onDrag={() => setIsDragged(true)}
      onStop={() => setIsDragged(false)}
    >
      <div className="absolute z-10 alert-box outer-border scale-down" style={{ "width": "30rem", "backgroundColor": "transparent" }}>
        <div className="inner-border">
          <div className={isDragged ? "invisible bg-transparent" : "bg-white"}>
            <div className="alert-contents" style={{ "paddingLeft": "30px", "paddingRight": "20px" }}>
              <section className="field-row" style={{ "justifyContent": "flex-start" }}>
                <div className="square">
                  <img style={{ width: 120, height: 60 }} src="catpixel3.png" alt="Cat Pixel Image" />
                </div>
                <p className="alert-text" style={{ "paddingLeft": "10px" }}>
                  Go ahead and explore! This site will be updated as time goes on and I gain more experience.
                </p>
              </section>
              <section className="field-row" style={{ "justifyContent": "flex-end" }}>
                <button className="btn" onClick={() => modalCtx.dispatch({ type: 'CLOSE_MODAL', id: renderedCtx.id })}>Cancel</button>
                <button className="btn" style={{ "width": "95px" }} onClick={() => modalCtx.dispatch({ type: 'ADD_MODAL', element: <WelcomeModal defaultPosition={{ x: mousePosition.x!, y: (mousePosition.y! - 40) }} /> })}>OK</button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
/**
 * Little Sanyu about me blurb 
 */
const AboutModal = ({ defaultPosition }: ModalProps) => {
  const renderedCtx = useContext(RenderedModalContext);
  const modalCtx = useContext(ModalContext);
  const mousePosition = useMousePosition();
  const [isDragged, setIsDragged] = useState(false);

  return (
    <Draggable defaultPosition={defaultPosition}
      onDrag={() => setIsDragged(true)}
      onStop={() => setIsDragged(false)}
    >
      <div className="absolute z-10 scale-down">
        <div className="window">
          <div className="title-bar">
            <button aria-label="Close" className="close" onClick={() => modalCtx.dispatch({ type: 'CLOSE_MODAL', id: renderedCtx.id })}></button>
            <h1 className="title">Sanyu World</h1>
            <button aria-label="Resize" className="resize"></button>
          </div>
          <div className="details-bar">
            <a style={{ textDecoration: "none" }} href="resume2.0.pdf"> <span>resume</span> </a>
            <a style={{ textDecoration: "none" }} href="www.linkedin.com/in/sanyukta-lamsal"> <span>linkedin</span> </a>
            <span>details</span>
          </div>

          <div className="window-pane" style= {{"width": "30rem", "backgroundColor": "transparent"}}>
            Hi there! My name is Sanyukta Lamsal and I am a student at UNC Chapel Hill pursuing Computer Science. I am currently looking out for internships, 
          </div>
        </div>
      </div>
    </Draggable>
  );
}


const Home: NextPage = () => {
  const [modals, dispatch] = useReducer(modalStackReducer, createModalStack());
  const mousePosition = useMousePosition();

  useEffect(() => {
    // create "welcome" modal at roughly the middle of the screen,
    // plus or minus a few pixels
    dispatch({ type: 'ADD_MODAL', element: <WelcomeModal defaultPosition={{ x: (Math.floor(window.innerWidth / 2) - 240), y: Math.floor(window.innerHeight / 2) - 150 }} /> });
    // dispatch({ type: 'ADD_MODAL', element: <img src="/catpixel.png" />}) 

    // and nuke all modals when this page is unmounted
    return () => {
      dispatch({ type: 'CLOSE_ALL_MODALS' });
    };
  }, []);


/**
 * File, Edit, etc..
 */
  return (
    // 30 rem
    <ModalContext.Provider value={{ stack: modals, dispatch }}>
      {renderModalStack(modals)}
      <div className="border-b-2 border-black">
        <ul role="menu-bar">
          <li role="menu-item" tab-index="0" aria-haspopup="true">
            <img style={{ width: 25, height: 25 }} src="catpixel3.png" alt="Cat Pixel Image" />
          </li>
          <li role="menu-item" tab-index="0" aria-haspopup="true">
            <b>File </b>
            <ul role="menu">
              <li role="menu-item"><a href="#menu">filler</a></li>
              <li role="menu-item"><a href="#menu">filler</a></li>
              <li role="menu-item" className="divider"><a href="#menu">filler</a></li>
              <li role="menu-item"><a href="https://open.spotify.com/user/3o7s4jtsnfbyh0it7ifh1yoik">sanyu&apos;s spotify</a></li>
            </ul>
          </li>
          <li role="menu-item" tab-index="0" aria-haspopup="true">
            Edit
            <ul role="menu">
              <li role="menu-item"><a href="#menu">filler</a></li>
              <li role="menu-item"><a href="#menu">filler</a></li>
              <li role="menu-item" className="divider"><a href="#menu">filler</a></li>
            </ul>
          </li>
          <li role="menu-item" tab-index="0" aria-haspopup="true">
            View
            <ul role="menu">
              <li role="menu-item"><a href="#menu">filler</a></li>
              <li role="menu-item"><a href="#menu">filler</a></li>
              <li role="menu-item"><a href="#menu">filler</a></li>
            </ul>
          </li>
          <li role="menu-item" tab-index="0" aria-haspopup="true">
            Special
            <ul role="menu">
              <li role="menu-item"><a href="#menu">filler</a></li>
              <li role="menu-item"><a href="#menu">filler</a></li>
              <li role="menu-item"><a href="#menu">filler</a></li>
            </ul>
          </li>
        </ul>

      </div>

 
      <div className="fixed desktop w-full h-full">
        <div className="flex flex-col items-end">
          <Icon.Wrapper onDoubleClick={() => dispatch({ type: 'ADD_MODAL', element: <AboutModal defaultPosition={{ x: 50 , y: 50 }}/>})}>
            <Icon.Box>
              <img style = {{width : 20, height: 20}} src='/star (1).png' />
              <Icon.Text style={{
                    fontSize: 16,
                    color: "black"
                }}>
               about
              </Icon.Text>
            </Icon.Box>
          </Icon.Wrapper>
        </div>
      </div>
 


      {/* <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            bottom: "-5%",
            left: "50%",
            transform: "translate(-50%, 90%)",
          }}
        >

          <div className="standard-dialog center scale-down" style={{ width: '30rem' }}>
            <h1 className="dialog-text">The Macintosh Finder, Version 1.0 (18 Jan 84)</h1>
            <p className="dialog-text">&copy; 1984 Apple Computer</p>
          </div>
        </div>
      </div> */}
    </ModalContext.Provider>
  )
}

export default Home;