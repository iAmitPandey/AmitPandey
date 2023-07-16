const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div>
        <a href="https://in.linked.com">
          <img src="" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com">
          <img src="" alt="Instagram" />
        </a>
        <a href="https://twitter.com">
          <img src="" alt="Twitter" />
        </a>
        <a href="https://www.facebook.com">
          <img src="" alt="Facebook" />
        </a>
        <div>{`© ${year} Mentorbridge. All Rights Reserved.`}</div>
      </div>
      <div>
        <div>
          <ul>
            <li>
              <a href={URL}>
                <u>Contact us</u>
              </a>
            </li>
            <li>
              <a href={URL}>Privacy policy</a>
            </li>
            <li>
              <a href={URL}>Terrms of use</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Help center</li>
            <li>About us</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
