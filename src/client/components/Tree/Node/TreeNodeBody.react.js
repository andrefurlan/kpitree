import React from "react";
import { FlatButton, FontIcon, Styles } from "material-ui";

class TreeNodeBody extends React.Component {

    getStyles() {
        return {
            "nodeBody": {
                height: "100%",
                display: "flex",
                flexDirection: "column"
            },
            "nodeBodyRow": {
                display: "flex"
            },
            "nodeBodyLabel": {
                width: "35%",
                paddingLeft: 5
            },
            "nodeBodyValue": {
                textAlign: "center",
                width: "48%"
            },
            "nodeBodyValueDev": {
                width: "48%",
                textAlign: "center"
            },
            "nodeBodyFlag": {
                backgroundColor: this.props.flagColor,
                width: "18%"
            },
            "nodeBodySpace": {
                width: "18%",
                textAlign: "center"
            },
            "button": {
                minHeight: "100%",
                minWidth: "18%",
                lineHeight: 0
            },
            "icon": {
                fontSize: 18,
                verticalAlign: "middle"
            }
        };
    }

    render() {
        const delta = "\u0394 %";
        const styles = this.getStyles();
        const actualLabel = "Actual";
        const targetLabel = "Target";
        return (
            <div ref="NodeBodyTarget" style={ styles.nodeBody }>
                <div style={ styles.nodeBodyRow }>
                    <div style={ styles.nodeBodyLabel }>
                        <span> { targetLabel } </span>
                    </div>
                    <div style={ styles.nodeBodyValue }>
                        <span> { this.props.targetValue } </span>
                    </div>
                </div>
                <div style={ styles.nodeBodyRow }>
                    <div style={ styles.nodeBodyLabel }>
                        <span> { actualLabel } </span>
                    </div>
                    <div style={ styles.nodeBodyValue }>
                        <span> { this.props.actualValue } </span>
                    </div>
                    <FlatButton style={ styles.button } >
                        <FontIcon style={ styles.icon } className="material-icons">trending_up</FontIcon>
                    </FlatButton>
                </div>
                <div style={ styles.nodeBodyRow }>
                    <div style={ styles.nodeBodyLabel }>
                        <span> { delta } </span>
                    </div>
                    <div style={ styles.nodeBodyValueDev }>
                        <span> { this.props.deltaValue } </span>
                    </div>
                    <div style={ styles.nodeBodyFlag } />
                </div>
            </div>
        );
    }
}

export default TreeNodeBody;