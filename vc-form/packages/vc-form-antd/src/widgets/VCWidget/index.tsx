import cn from 'classnames';
import * as React from 'react';
import { WidgetProps } from 'react-jsonschema-form';

import './index.less';

export interface ValidateResult {
  type: string;
  message: string;
}

export interface VCWidgetOptions {
  _errorType: string;
  validate: [ValidateResult];
}

export interface VCWidgetProps extends WidgetProps {
  options: VCWidgetOptions;
}

export const VCWidget = () => {
  return (
    <section
      className={cn({
        'vc-form-widget': true
      })}
    />
  );
};
