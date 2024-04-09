import CookieConsent from 'react-cookie-consent';

const Cookie = () => {
  return (
    <>
      <CookieConsent
        cookieName="cookies"
        style={{ background: '#000', textAlign: 'left' }}
        buttonStyle={{
          border: '2px solid #000',
          borderRadius: '5px',
          outline: 'none',
          background: 'blue',
          padding: '6px',
          color: 'yellow',
          fontSize: '1em',
          '&:hover': {
            background: 'blue',
          },
        }}
        expires={365}
      >
        This website uses cookies.{' '}
      </CookieConsent>
    </>
  );
};

export default Cookie;
