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
import Card from '../Card';

import docs from './InlineMessage.docs.mdx';
import { InlineMessage, InlineMessageProps } from './InlineMessage';

export default {
  title: 'Forms/InlineMessage',
  component: InlineMessage,
  parameters: {
    docs: { page: docs },
  },
};

export const Base = (args: InlineMessageProps) => (
  <Card spacing={args.size}>
    <InlineMessage {...args}>Something might go terribly wrong.</InlineMessage>
  </Card>
);

Base.args = {
  variant: 'warning',
  noMargin: true,
};

export const Variants = (args: InlineMessageProps) => (
  <Card spacing={args.size}>
    <InlineMessage {...args} variant="success" noMargin>
      Something has gone wonderfully right.
    </InlineMessage>

    <InlineMessage {...args} variant="warning" noMargin>
      Something might go sideways.
    </InlineMessage>

    <InlineMessage {...args} variant="danger" noMargin>
      Something has gone terribly wrong.
    </InlineMessage>
  </Card>
);

export const Sizes = (args: InlineMessageProps) => (
  <Stack>
    <Card spacing="mega">
      <InlineMessage {...args} variant="success" size="mega" noMargin>
        Something has gone wonderfully right with a smaller card.
      </InlineMessage>
    </Card>
    <Card>
      <InlineMessage {...args} variant="success" size="giga" noMargin>
        Something has gone wonderfully right with a larger card.
      </InlineMessage>
    </Card>
  </Stack>
);
