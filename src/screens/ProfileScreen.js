import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import PlansScreen from "./PlansScreen";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEWqAAH9+/v///+nAAClAAD9+fn9+vr89vavJyf48PDu09P47u6/VVXmuru1MjLowcHeq6y8T0/EbW3y39/Qhoa8SkrboaHIdnazHR7KhYWuAADQjIy4PT3ryMnLfn7XmJn25OStERKvBwnDW1vx2NnFYmKzLS64P0CuISGsDQ7bpKTDZmbkvLzGcXGvFxg9Nu1RAAAD/UlEQVR4nO3cb1eiQBiGcZlnFAQRtBQL/5CVtdb2/T/egtZuytBKTeDuuX4v9uyp3efcNyKMntFOBwAAAAAAAAAAAAAAAAAAAAAAAABw1kTvyH8aQ/R1GvZzYTpssaTo4TRydzHmdmPo0aKnlHKc/I9eNGmroh5c9IoURQzHX1qMoVe7ua+Uk2h7s+vESA9iqNhaRR2/G7yrOG6jYn6cncMckaWKens0OZ+dNH+iyqgcw7czeVCa7CjXszK7Du0bclg50nJXnuwom0/z02JMTDEubEweGybn50fjDafGHLdfzyGxcXJ2YyF1HToz5gi/3lAHpsmOmltIXcfaNcawca2paGjh9KhlaG549/XJ1xUNnxpuOP+2hlLR8L7ZhjLpfldDbbpZtPA8rDhLLSxrKq7SwcxC6joqrjSXFhqWF0uOtfVSDXphyuFubIw2rJYclTZ+xzcsHh31bGXVNig/x5U7tDC5Hh0Z1qUDKwdalsejlWNncj3rfinHylIMiY5fHzZ9M9zHuO8e5bByju5nhwcvrvstvDrcxbjNDl7jP9ucPcjU2xskKvTaep9GrmPnd47A7gs46dyGd8XYxeVDm+8nipcuioOdRcmL7RwinUfPu5HW3y+VH57nrVvPAQAAAAAAAAAAAOCsSKHtEN9HxEuiKGp4e11z5HG86BabCprfunScZDia2z+TpJMGb7tDVPN76t8nWW9d1V3cdmx2FFknF392v6hxmw/izN/vDLm73NiKITLaZge7e9o8TeXtoyhK9VMrj6N0nnylDnZG2dh/+fk873Y1quzS++KnzUSGl5kq7W0btXmW+gebtIJo8OmO+Y1vnl70y/3avZaKf7zjz18+fKJkXm+y9N1SvWKrcuOf3TlMlpQPufucDKVGS9F6dr/KuoZ6jnIja1ewT5LUcNiVG8TjH/rvd0nJ23lJHPQdU738h2Hb/YqQiWM69nnLi2my0dq8six+qPX6Pg37rjK2K2Ys2tjFWyajhTlinrzr+nF6NZi8rDv6t876Zj76mU4j13Wq2hXnQfR0LotukYeKjvua+a+6O24QuPu/9ZSq7Lb/X3fLl3PpV8gvhP5Hgf8E//u/2R2UaHJO9XZEj0LjxbCuvJ4/nZ1dv0J+6UhOeiA/7tdfdVr/xoNqoh/jyivjCQ+e6oaWv2TgG4ieJWH1FfKDekGc3LT/hRUnyZcz93FwesniwcumkxPWB2ckv5tv0qjb+/DB3N8wer1+nMz+rXqvitXm7VXsu683v/eKe6ObhXG6HAyv/8l2b4qlmWwmy6urdDXdbrfTVXqVG8+Hm2KN89+8UyhlbUcCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABo2y8B3ipQZTVPOwAAAABJRU5ErkJggg=="
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>

              <PlansScreen />
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
