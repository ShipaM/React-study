const typeConst = "type";

module.exports = (
  componentName
) => `import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import './${componentName}.css';
import { memo } from 'react';

${typeConst} ${componentName}Props = {
    className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={classNames("", {}, [className])}>

        </div>
    );
});

${componentName}.displayName = "${componentName}";
`;
