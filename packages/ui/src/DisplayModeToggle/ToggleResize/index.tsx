/*
 * This file is part of ORY Editor.
 *
 * ORY Editor is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ORY Editor is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ORY Editor.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @license LGPL-3.0
 * @copyright 2016-2018 Aeneas Rekkas
 * @author Aeneas Rekkas <aeneas+oss@aeneas.io>
 *
 */
import * as React from 'react';
import Resize from '@material-ui/icons/SettingsOverscan';
import { connect } from 'react-redux';
import { resizeMode } from '@teamshirts/core/lib/actions/display';
import { isResizeMode } from '@teamshirts/core/lib/selector/display';
import { createStructuredSelector } from 'reselect';

import Button from '../Button/index';

export interface InnerReduxProps {
  isResizeMode: boolean;
}

export interface InnerActionProps {
  resizeMode: React.MouseEventHandler<HTMLElement>;
}

interface OwnProps {
  label: string;
}

export type InnerProps = InnerReduxProps & InnerActionProps & OwnProps;

const Inner: React.SFC<InnerProps> = props => (
  <Button
    icon={<Resize />}
    description={props.label}
    active={props.isResizeMode}
    onClick={props.resizeMode}
  />
);

const mapStateToProps = createStructuredSelector({ isResizeMode });
const mapDispatchToProps = { resizeMode };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inner);
