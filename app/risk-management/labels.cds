using RiskService as service from '../../srv/risk-service';

annotate service.Risks with @title : 'Risks Title' {
    title @title: '{i18n>RiskTitle}'
};
