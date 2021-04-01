import React from 'react'

export default function ContributionDetailIframe(props) {
    let { contribution } = props;
    return (
        <div>
            { contribution.files?.map((contribute, index) => {
                return <iframe title="file word" key={index} src={`https://docs.google.com/gview?url=https://35.224.120.132/${contribute.file}&embedded=true`}></iframe>
            })
            }
        </div>
    )
}
