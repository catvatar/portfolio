import TagElement from "../src/components/tag-element"
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

describe('TagElement', () => {
  it('should add a tag when clicked', () => {
    const tag = 'TestTag';
    const mockSetTagsState = jest.fn();
    jest.spyOn(React, 'useContext').mockReturnValue([[], mockSetTagsState]);
    const { getByText } = render(<TagElement tag={tag} />);
    fireEvent.click(getByText(tag));
    expect(mockSetTagsState).toHaveBeenCalledWith([tag]);
  });

  it('should remove a tag when clicked twice', () => {
    const tag = 'TestTag';
    const mockSetTagsState = jest.fn();
    jest.spyOn(React, 'useContext').mockReturnValue([[tag], mockSetTagsState]);
    const { getByText } = render(<TagElement tag={tag} />);
    fireEvent.click(getByText(tag));
    fireEvent.click(getByText(tag));
    expect(mockSetTagsState).toHaveBeenCalledWith([]);
  });
});
