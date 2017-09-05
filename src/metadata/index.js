import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';

/**
 * @export
 * @class MetaData
 * @extends {React.Component}
 */
export default class MetaData extends React.Component {
    /**
     * Props types checking
     *
     * @static
     *
     * @memberOf MetaData
     */
    static propTypes = {
        meta: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired
    }

    /**
     * Render the component
     *
     * @returns {Object}
     *
     * @memberOf MetaData
     */
    render () {
        return (
            <div className="application">
                <Helmet>
                    { this.props.meta.map((val, key) => (
                        <meta key={key} name={val.name} content={val.content} />
                    ))}
                    <title>{this.props.title}</title>
                </Helmet>
            </div>
        );
    }
}
