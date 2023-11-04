import { add, sub } from 'a';
import { multiply, devide } from 'b';

const { log } = console;

log(add(1, 2));
log(sub(1, 2));
log(multiply(1, 2));
log(devide(1, 2));

function test() {
  for (let i = 0; i < 10; i++) {
    log(i);
  }
}
