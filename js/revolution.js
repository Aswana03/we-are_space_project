import {Component, Property} from '@wonderlandengine/api';

/**
 * revolution
 */
export class Revolution extends Component {
    static TypeName = 'revolution';
    /* Properties that are configurable in the editor */
    static Properties = {
        param: Property.float(1.0)
    };

    start() {
        console.log('start() with param', this.param);
    }

    update(dt) {
        /* Called every frame. */
    }
}
