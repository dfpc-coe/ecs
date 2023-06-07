import cf from '@openaddresses/cloudfriend';
import ECS from './lib/ecs.js';

export default cf.merge({
    Description: 'Template for @tak-ps/ecs',
    Parameters: {
        GitSha: {
            Description: 'GitSha that is currently being deployed',
            Type: 'String'
        }
    }
}, ECS);
