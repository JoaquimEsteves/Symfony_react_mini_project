import React from 'react';
/*const Header = React.memo(() => (
    <div className="header">
        <h1>Yo</h1>
    </div>
));*/

class Header extends React.Component {
    shouldComponentUpdate(_nextProps: any,_nextState: any) {
        return false;
    }
    
    render() {
        return (
            <div className="header">
                <h1>Hello There! Search for users! Or click on them to check out their posts and locations!</h1>
            </div>
        );
    }
}

export default Header;