/**
 * Copyright 2015 - Present, Yahoo Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

import I13nNodeLib from './libs/I13nNode';
import ReactI13nLib from './libs/ReactI13n';

import createI13nNodeLib from './utils/createI13nNode';
import setupI13nLib from './utils/setupI13n';

import I13nAnchorLib from './components/I13nAnchor';
import I13nButtonLib from './components/I13nButton';
import I13nDivLib from './components/I13nDiv';

// Core libraries
export const I13nNode = I13nNodeLib;
export const ReactI13n = ReactI13nLib;

// Utils
export const createI13nNode = createI13nNodeLib;
export const setupI13n = setupI13nLib;

export const I13nAnchor = I13nAnchorLib;
export const I13nButton = I13nButtonLib;
export const I13nDiv = I13nDivLib;
