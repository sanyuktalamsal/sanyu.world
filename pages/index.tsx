import type { NextPage } from 'next'
import { Avatar, Modal } from '@react95/core'
import {
  InfoBubble,
  RecycleFull,
  Notepad,
  Wordpad,
  User,
} from '@react95/icons';
import Image from 'next/image';
import Icon from '../components/Icon';
import MainTaskBar from '../components/MainTaskBar';
import NotepadModal from '../components/NotepadModal';
// @ts-ignore
import aboutMeContent from '../notepad_contents/about_me.txt';
// @ts-ignore
import contactMeContent from '../notepad_contents/contact_me.txt';
// @ts-ignore
import musicContent from '../notepad_contents/music.txt';
import { useState } from 'react';

const notepadContents = {
  'about_me.txt': aboutMeContent,
  'contact_me.txt': contactMeContent,
  'cherished_music.txt': musicContent,
};

const Home: NextPage = () => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  const [showNotepad, setShowNotepad] = useState(false);
  const [notepadContent, setNotepadContent] = useState<'about_me.txt' | 'contact_me.txt' | 'cherished_music.txt'>('about_me.txt');

  return (
    <div className="flex flex-col items-start">
      { showWelcomeModal && <Modal
        closeModal={() => setShowWelcomeModal(false)}   
        icon={<InfoBubble/>}
        defaultPosition={{x: 80, y: 50}}
        title={'Welcome!'}
        height={'160'}
        width={'300'}
      >
        <Image className="relative z-20"
               src="/stars.gif"
               alt="Stars"
               fill={true} />
        <div className="relative z-10">
          <div className="flex flex-col">
            <div className="flex justify-center items-center">
              <Avatar src="/nicorobin.jpeg" alt="photo" size={32} circle />
              <span className="pl-2">
                Hello, there!
              </span>
            </div>
            <div> 
              My name is Sanyukta Lamsal and I am a 20 year old sophomore student pursuing Computer Science at UNC Chapel Hill. I am currently on the look for internships and experience! 
          

            </div>
            <div>
              Feel free to explore my world...
              
            </div>
          </div>

        </div>
      </Modal> }

      <NotepadModal
        show={showNotepad}
        setShow={setShowNotepad}
        title={`Notepad - ${notepadContent}`}
        value={notepadContents[notepadContent]}
      />

      {/* <Icon.Box>
        <RecycleFull />
        <Icon.Text>
          Recycle Bin
        </Icon.Text>
      </Icon.Box> */}

      {/* <Icon.Wrapper onDoubleClick={() => {
        let elem = document.createElement("a");
        elem.download = "resume.pdf";
        elem.href = "/resume.pdf";
        elem.click();
      }}>
        <Icon.Box>
          <Wordpad variant='32x32_4' />
          <Icon.Text>
            resume.pdf
          </Icon.Text>
        </Icon.Box>
      </Icon.Wrapper> */}

      {/* <Icon.Wrapper onDoubleClick={() => (setNotepadContent('about_me.txt'), setShowNotepad(true))}>
        <Icon.Box>
          <Notepad variant='32x32_4' />
          <Icon.Text>
            about_me.txt
          </Icon.Text>
        </Icon.Box>
      </Icon.Wrapper> */}

      <Icon.Wrapper onDoubleClick={() => (setNotepadContent('contact_me.txt'), setShowNotepad(true))}>
        <Icon.Box>
          <Image src="/marioStar.gif"
            alt = "Mario Star"
            width = "32"
            height = "32" />
          {/* <Notepad variant='32x32_4' /> */}
          <Icon.Text>
            contact_me.txt
          </Icon.Text>
        </Icon.Box>
      </Icon.Wrapper>

      <Icon.Wrapper onDoubleClick={() => (setNotepadContent('cherished_music.txt'), setShowNotepad(true))}>
        <Icon.Box>
        <Image src="/marioStar.gif"
            alt = "Mario Star"
            width = "32"
            height = "32" />
          {/* <Notepad variant='32x32_4' /> */}
          <Icon.Text>
            lovely_music.txt
          </Icon.Text>
        </Icon.Box>
      </Icon.Wrapper>

      <MainTaskBar />
    </div>
  )
}

export default Home;