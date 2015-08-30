import React from "react";

import immutable from "immutable";

class Connector extends React.Component {

    getStyles() {
        return {
            "connector": {
                position: "absolute",
                display: "flex"
            },
            "connectorParent": {
                borderTop: "solid 1px #999999",
                position: "relative",
                height: 1
            },
            "connectorChildren": {
                borderBottom: "solid 1px #999999",
                height: 1,
                position: "relative"
            },
            "connectorRow": {
                borderLeft: "solid 1px #999999"
            }
        };
    }

    render() {
        const styles = this.getStyles();
        const connectorStyle = this.props.connectorStyle.merge(styles.connector).toJS();
        const parentConStyle = this.props.parentConStyle.merge(styles.connectorParent).toJS();
        const rowConStyle = this.props.rowConStyle.merge(styles.connectorRow).toJS();
        return (
            <div style={connectorStyle}>
                <div style={parentConStyle} />
                <div style={rowConStyle}>
                    {this.props.children.map((c) => {
                        const childrenConStyle = c.get("style").merge(styles.connectorChildren).toJS();
                        return (<div key={c.get("key")} style={childrenConStyle} />);
                    })}
                </div>
            </div>
        );
    }
}

Connector.propTypes = {
    children: React.PropTypes.instanceOf(immutable.List).isRequired,
    connectorStyle: React.PropTypes.instanceOf(immutable.Map).isRequired,
    parentConStyle: React.PropTypes.instanceOf(immutable.Map).isRequired,
    rowConStyle: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default Connector;
