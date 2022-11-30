import React from 'react';
import Icon, {IconNames, IconSizes} from '../icon/icon';
import './Spinner.css'

export const Spinner = () => {
  return (
    <div className="spinner-icon">
     <Icon name={IconNames.Spinner} size={IconSizes.small} />
    </div>
  )
}