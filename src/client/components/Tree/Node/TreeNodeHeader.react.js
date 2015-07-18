import React from "react";
import TreeNodeDrillBtn from "./TreeNodeDrillBtn.react";

class TreeNodeHeader extends React.Component {

    getStyles() {
        return {
            "root": {
                display: "flex",
                borderBottom: "solid 1px #d9d9d9"
            },
            "name": {
                width: "82%",
                paddingLeft: 5,
                fontWeight: 500,
                fontSize: 15,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
            },
            "button": {
                width: "18%"
            }
        };
    }

    render() {
        const styles = this.getStyles();
        return (
            <div className="NodeHeader" style={ styles.root }>
                <div className="NodeHeader-name" style={ styles.name }>
                    <span> { this.props.kpiName } </span>
                </div>
                <div className="NodeHeader-button" style={ styles.button }>
                    <TreeNodeDrillBtn
                        kpiId={ this.props.kpiId }
                        actions={ this.props.actions }/>
                </div>
            </div>
        );
    }
}

export default TreeNodeHeader;