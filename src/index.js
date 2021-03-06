import Draggable from './draggable';
import Sortable from './sortable';
import Swappable from './swappable';
import Droppable from './droppable';
import AbstractEvent from './events/abstract-event';
import Snappable from './behaviour/snappable';
import Collidable from './behaviour/collidable';

export {
  Draggable,
  Sortable,
  Swappable,
  Droppable,
  Snappable,
  Collidable,
  AbstractEvent,
};

export function createEventClass(options) {
  function EventConstructor() { return null; }
  EventConstructor.prototype = AbstractEvent.prototype;
  createEventClass.type = options.type;
  return createEventClass;
}
