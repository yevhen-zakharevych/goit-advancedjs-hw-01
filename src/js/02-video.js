import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const startSeconds = +localStorage.getItem('videoplayer-current-time') ?? 0;

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
  start_time: startSeconds,
});

player.setCurrentTime(startSeconds);

player.on(
  'timeupdate',

  throttle(({ seconds }) => {
    logTimeUpdate(seconds);
  }, 1000)
);

function logTimeUpdate(time) {
  localStorage.setItem('videoplayer-current-time', time);
}
