import cf from '@openaddresses/cloudfriend';

export default {
    Resources: {
        ECSCluster: {
            Type: 'AWS::ECS::Cluster',
            Properties: {
                ClusterName: cf.stackName
            }
        },
    }
};
