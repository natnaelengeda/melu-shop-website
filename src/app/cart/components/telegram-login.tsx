import React, { useEffect } from 'react';

const TelegramLogin = () => {
  useEffect(() => {
    // Define the auth function globally
    window.onTelegramAuth = function (user) {
      alert(
        `Logged in as ${user.first_name} ${user.last_name || ''} (${user.id}${user.username ? ', @' + user.username : ''
        })`
      );
    };

    // Create and inject the script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.setAttribute('data-telegram-login', 'melu_clothes_shop_bot'); // your bot username
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    script.setAttribute('data-request-access', 'write');

    // Append the script to the container
    document.getElementById('telegram-login-button')?.appendChild(script);

    // Cleanup on unmount
    return () => {
      const container = document.getElementById('telegram-login-button');
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <div>
      <h2>Login with Telegram</h2>
      <div
        id="telegram-login-button" />
    </div>
  );
};

export default TelegramLogin;
