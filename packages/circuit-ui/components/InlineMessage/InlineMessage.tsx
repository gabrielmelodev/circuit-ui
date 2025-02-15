/**
 * Copyright 2019, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { css } from '@emotion/react';
import { HTMLAttributes } from 'react';

import styled, { StyleProps } from '../../styles/styled';
import { deprecate } from '../../util/logger';

type Variant = 'danger' | 'success' | 'warning';

export interface InlineMessageProps
  extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Indicates the color of the left border and text in the message.
   */
  variant: Variant;
  /**
   * Should correspond to the size provided to the surrounding Card component.
   */
  size?: 'mega' | 'giga';
  /**
   * Removes the default bottom margin from the text.
   */
  noMargin?: boolean;
}

const marginStyles = ({ noMargin }: InlineMessageProps) => {
  if (!noMargin) {
    if (
      process.env.NODE_ENV !== 'production' &&
      process.env.NODE_ENV !== 'test'
    ) {
      deprecate(
        'InlineMessage',
        'The default outer spacing in the InlineMessage component is deprecated.',
        'Use the `noMargin` prop to silence this warning.',
        'Read more at https://github.com/sumup-oss/circuit-ui/issues/534.',
      );
    }

    return null;
  }

  return css`
    margin-bottom: 0;
  `;
};

const createLeftBorderStyles =
  (variantName: Variant) =>
  ({ theme, size = 'giga', variant }: StyleProps & InlineMessageProps) => {
    const colors = {
      danger: theme.colors.alert,
      success: theme.colors.confirm,
      warning: theme.colors.notify,
    } as const;

    const textColors = {
      danger: theme.colors.alert,
      success: theme.colors.black,
      warning: theme.colors.black,
    } as const;

    return (
      variant === variantName &&
      css`
        color: ${textColors[variant]};
        position: relative;
        margin-bottom: ${theme.spacings.mega};

        &:before {
          display: inline-block;
          border-top-right-radius: ${theme.borderRadius.bit};
          border-bottom-right-radius: ${theme.borderRadius.bit};
          content: '';
          position: absolute;
          left: -${theme.spacings[size]};
          top: 0;
          height: 100%;
          background-color: ${colors[variant]};
          width: 3px;
        }
      `
    );
  };

const successStyles = createLeftBorderStyles('success');
const warningStyles = createLeftBorderStyles('warning');
const dangerStyles = createLeftBorderStyles('danger');

export const InlineMessageStyled = styled('p')<InlineMessageProps>(
  dangerStyles,
  successStyles,
  warningStyles,
  marginStyles,
);

/**
 * @deprecated — Use the new NotificationInline component instead.
 * An inline message displayed inside a Card.
 */
export const InlineMessage = (props: InlineMessageProps): JSX.Element => {
  if (
    process.env.NODE_ENV !== 'production' &&
    process.env.NODE_ENV !== 'test'
  ) {
    deprecate(
      'InlineMessage',
      'The InlineMessage component is deprecated.',
      'Use the `NotificationInline` component instead.',
      'Refer to the migration guide: https://github.com/sumup-oss/circuit-ui/MIGRATION.md/#notification-components',
    );
  }
  return <InlineMessageStyled {...props} />;
};
