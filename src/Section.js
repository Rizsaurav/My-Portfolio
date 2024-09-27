import React from 'react';

function Section({ left, right }) {
  return (
    <div className="section">
      <div className="left">
        <h2>{left.title}</h2>
        {left.subtitle && <h3>{left.subtitle}</h3>}
        <ul>
          {left.content.map((item, index) => (
            <li key={index}>
              {item.type === 'text' && (
                <p className={item.className || ''}>{item.text}</p>
              )}
              {item.type === 'social-icons' && (
                <div>
                  <h3>Connect with Me</h3>
                  <div className="social-icons">
                    {item.items.map((social, idx) => (
                      <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer">
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
        <h2>{right.title}</h2>
        <ul>
          {right.content.map((item, index) => (
            <li key={index}>
              {item.type === 'text' && (
                <p>{item.text}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Section;
