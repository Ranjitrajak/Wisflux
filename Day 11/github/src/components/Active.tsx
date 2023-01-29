import React from 'react'
import '../style/active.css'
type Event = {
    id: string
    type: string
    actor: {
        id: number
        login: string
        display_login: string
        gravatar_id: string
        url: string
        avatar_url: string
    }
    repo: {
        id: number
        name: string
        url: string
    }
    payload: {
        action?: string
        push_id?: number
        size?: number
        distinct_size?: number
        ref?: string
        head?: string
        before?: string
        commits?: Array<{
            sha: string
            author: {
                email: string
                name: string
            }
            message: string
            distinct: boolean
            url: string
        }>
        ref_type?: string
        master_branch?: string
        description?: string
        pusher_type?: string
    }
    public: boolean
    created_at: string
    org?: {
        id: number
        login: string
        gravatar_id: string
        url: string
        avatar_url: string
    }
}

interface EventsProps {
    arr: Event[]
}

const Active = (props: EventsProps) => {
    return (
        <>

            {
                props.arr.map((item, i) => {
                    return (
                        <div className="item" key={i}>
                            <div className="type">
                                {item.type}
                            </div>
                            <div className="link">
                                {
                                    <a href={`https://www.github.com/${item.repo.name}`} >
                                        {item.repo.name}
                                    </a>

                                }

                            </div>
                            <div className="date">
                                {
                                    new Date(item.created_at).toDateString()
                                }
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Active