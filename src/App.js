import React from 'react';
import './index.css';

import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';
import { IoMailUnreadOutline } from 'react-icons/io5';
import { CiPhone } from 'react-icons/ci';

function App() {
  const sections = [
    {
      id: 'page-1',
      left: {
        title: 'Hi, I am Saurav Rijal',
        subtitle: 'A learner',
        content: [
          {
            type: 'social-icons',
            items: [
              { icon: <FaLinkedin className="icon" />, url: 'https://www.linkedin.com/in/saurav-rijal-08082a261/' },
              { icon: <FaFacebook className="icon" />, url: 'https://www.facebook.com/SauravRijal' },
              { icon: <TiSocialInstagram className="icon" />, url: 'https://www.instagram.com/sauravrz/' },
              { icon: <FaGithub className="icon" />, url: 'https://www.github.com/Rizsaurav' }
            ]
          }
        ]
      },
      right: {
        images: [
          'deep-learning.png',
          'networking.png',
          'neural.png'
        ]
      }
    },
    {
      id: 'page-2',
      left: {
        title: 'My Hobbies',
        content: [
          { type: 'text', text: 'Reading books, watching and playing soccer, and traveling.' },
          {
            type: 'text',
            text: '“Man is a mystery. It needs to be unraveled, and if you spend your whole life unraveling it, don’t say that you’ve wasted time. I am studying that mystery because I want to be a human being.”',
            className: 'cursive'
          }
        ]
      },
      right: {
        images: [
          'deep-learning.png',
          'networking.png',
          'neural.png'
        ]
      }
    },
    {
      id: 'page-3',
      left: {
        title: 'Contact Information',
        content: [
          {
            type: 'social-icons',
            items: [
              { icon: <IoMailUnreadOutline className="icon" />, url: 'mailto:yty10@txstate.edu' },
              { icon: <CiPhone className="icon" />, text: '(123) 456-7890', url: 'tel:7373151815' }
            ]
          }
        ]
      },
      right: {
        images: [
          'deep-learning.png',
          'networking.png',
          'neural.png'
        ]
      }
    }
  ];

  return (
    <div className="App">
      {sections.map((section, index) => (
        <div key={section.id} className="section">
          <div className="left">
            <h2>{section.left.title}</h2>
            {section.left.subtitle && <h3>{section.left.subtitle}</h3>}
            <ul>
              {section.left.content.map((item, idx) => (
                <li key={idx}>
                  {item.type === 'text' && (
                    <p className={item.className || ''}>{item.text}</p>
                  )}
                  {item.type === 'social-icons' && (
                    <div>
                      <h3>Connect with Me</h3>
                      <div className="social-icons">
                        {item.items.map((social, id) => (
                          <a key={id} href={social.url} target="_blank" rel="noopener noreferrer">
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="right">
            {section.right.images.map((img, idx) => (
              <img key={idx} src={`/${img}`} alt={`Visual representation ${idx}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
