import React from 'react';

type Props = {
    children: React.ReactNode;
}

export default class NoteCard extends React.PureComponent<Props, undefined> {
    render() {
        const {children} = this.props;
        return(
            <div className="border p-5">
                {children}
            </div>
        )
    }
}