import React from "react";
import { RaisedButton, Styles } from "material-ui";

class Home extends React.Component {

    getStyles() {
        return {
            middle: {
                width: "100%",
                height: "100%",
                paddingTop: "64",
                paddingBottom: "30",
                backgroundColor: Styles.Colors.grey50,
                textAlign: "center"
            },
            description: {
                paddingTop: "30",
                paddingBottom: "50",
                backgroundColor: Styles.Colors.amber500,
            },
            button: {
                marginTop: "100",
                marginBottom: "50"
            }
        };
    }

    render() {
        const style = this.getStyles();
        const clickHandle = function(e) {
            this.context.router.transitionTo("demo");
        };
        return (
            <div style={style.middle}>
                <div style={style.description}>
                    <h2>
                        Small app to analyze KPI performance using a tree diagram
                    </h2>
                    <RaisedButton label="Demo" onClick={clickHandle.bind(this)} style={style.button} />
                </div>
                <div>
                    <p>
                        This is work in progress, but it will eventually be really cool
                    </p>
                </div>
            </div>
        );      
    }
}

Home.contextTypes = {
    router: React.PropTypes.func
}

export default Home;