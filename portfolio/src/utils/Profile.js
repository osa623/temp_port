import React from 'react';
import '../custom/profileAnimation.css';

const Profile = () => {
  return (
    <div className='flex scale-150 h-[40vh] rounded-full'>

            <div>
            <ol reversed className="paces" lang="en">
                <li className="pace js text-primary text-sm">
                JAVASCRIPT
                </li>
                <li className="pace css text-primary">
                CSS

                </li>
                <li className="pace html text-primary">
                HTML

                </li>
                <li className="pace url text-primary">
                REACT

                </li>
                <li className="pace http text-primary">
                NODEJS

                </li>
                <li className="pace tcpip text-primary">
                MONGODB

                </li>
            </ol>
            <footer>
                <blockquote>
                <p>
                    Fast gets all the attention,<br />
                    but Slow has all the power
                </p>
                <cite>Stewart Brand "Pacelayers"</cite>
                </blockquote>
                <a href="https://vimeo.com/373128517">The Layers of the Web - Jeremy Keith</a>
            </footer>
            </div>


    </div>

  );
};

export default Profile;
