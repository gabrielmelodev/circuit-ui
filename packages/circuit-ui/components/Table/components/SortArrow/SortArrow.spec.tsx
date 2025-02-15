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

import {
  create,
  render,
  renderToHtml,
  axe,
  act,
  userEvent,
} from '../../../../util/test-utils';

import SortArrow from '.';

describe('SortArrow', () => {
  describe('Style tests', () => {
    it('should render with both arrows styles', () => {
      const actual = create(<SortArrow label="Sort" />);
      expect(actual).toMatchSnapshot();
    });

    it('should render with ascending arrow styles', () => {
      const actual = create(<SortArrow label="Sort" direction="ascending" />);
      expect(actual).toMatchSnapshot();
    });

    it('should render with descending arrow styles', () => {
      const actual = create(<SortArrow label="Sort" direction="descending" />);
      expect(actual).toMatchSnapshot();
    });
  });

  describe('Logic tests', () => {
    it('should call the onClick callback', () => {
      const onClick = jest.fn();
      const { getByTestId } = render(
        <SortArrow label="Sort" onClick={onClick} data-testid="sort" />,
      );
      act(() => {
        userEvent.click(getByTestId('sort'));
      });
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility tests', () => {
    it('should meet accessibility guidelines', async () => {
      const wrapper = renderToHtml(<SortArrow label="Sort" />);
      const actual = await axe(wrapper);
      expect(actual).toHaveNoViolations();
    });
  });
});
