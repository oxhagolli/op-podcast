import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer id="footer">
      <p>
        If you'd like to keep up with our Kanban board, click{' '}
        <a href="https://ora.pm/project/123434/list/496173">here</a>
      </p>
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={name}>
              <a href={url} className={`icon ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; The OP Podcast.</li>
        <li>
          Credits: <a href="http://unsplash.com/">Unsplash</a> +
          <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </footer>
  );
}
