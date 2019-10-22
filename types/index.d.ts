import React from 'react';
declare module 'react' {
	interface  HTMLAttributes<T> {
    // extends React's HTMLAttributes
    styleName?: any;
	}
}