import React, { useEffect, useState } from 'react';
import './StreakWidget.css'; // Add CSS styles for the widget

const StreakWidget = ({username}) => {
  const [streak, setStreak] = useState(null);

  useEffect(() => {
    // Fetch user data from Duolingo API
    fetch(`https://www.duolingo.com/2017-06-30/users?username=${username}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.users && data.users.length > 0) {
          const user = data.users[0];
          setStreak(user.streak);
        }
      });
  }, [username]);

  return (
    <div className='parent'>
      <div className='streak-widget'>
        {streak !== null && (<div className='streak-num'>{streak}</div>)}
      </div>
    </div>
  );
};

export default StreakWidget;