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

import { Stack } from '../../../../.storybook/components';

import { Badge, BadgeProps } from './Badge';
import docs from './Badge.docs.mdx';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: { page: docs },
  },
};

/* eslint-disable no-param-reassign */
export const Base = (args: BadgeProps) => {
  delete args.onClick;
  return <Badge {...args} />;
};

Base.args = {
  children: 'Badge',
};

export const Variants = (args: BadgeProps) => {
  delete args.onClick;
  return (
    <Stack>
      <Badge {...args} variant="neutral">
        Neutral
      </Badge>
      <Badge {...args} variant="confirm">
        Confirm
      </Badge>
      <Badge {...args} variant="notify">
        Notify
      </Badge>
      <Badge {...args} variant="alert">
        Alert
      </Badge>
      <Badge {...args} variant="promo">
        Promo
      </Badge>
    </Stack>
  );
};

export const Circular = (args: BadgeProps) => {
  delete args.onClick;
  return (
    <Stack>
      <Badge {...args} circle>
        1
      </Badge>
      <Badge {...args} circle>
        42
      </Badge>
      <Badge {...args} circle>
        999
      </Badge>
    </Stack>
  );
};
