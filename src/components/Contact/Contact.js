import useCursorHandlers from "hooks/useCursorHandlers";
import { IntersectionObserver } from "hooks/useIntersection";
import ContactItem from "./ContactItem";

const Contact = () => {

    const cursorHandlers = useCursorHandlers();

    let contact_Array = [
        {
            "title": "Messenger",
            "image_hover": "✍️",
            "link": "I'm doing modern websites",
            "text": "WRITE TO ME"
        },
        {
            "title": "Email",
            "image_hover": "📬",
            "link": "",
            "text": "WRITE TO ME"
        },
        {
            "title": "Linkedin",
            "image_hover": "🤵🏻‍♂️",
            "link": "",
            "text": "WRITE TO ME"
        },
        {
            "title": "Behance",
            "image_hover": "👨🏻‍🎨",
            "link": "",
            "text": "WATCH MY ARTWORKS"
        },
        {
            "title": "Dribbble",
            "image_hover": "✏️",
            "link": "",
            "text": "WATCH MY ARTWORKS"
        },
        {
            "title": "Github",
            "image_hover": "👨🏻‍💻",
            "link": "",
            "text": "LOOK AT MY CODE"
        }
    ]

    return(
        <>
            <div className="row">
                <div className="col_h_8 col_h_4_offset">
                {contact_Array.map((item, key) => (
                    <>
                        <IntersectionObserver key={key}>
                            <ContactItem {...cursorHandlers} data={item} pos={key} />
                        </IntersectionObserver>
                    </>
                ))}
                    {/* <ContactItem onMouseOver={e => mousemove(e, coding_1)} onMouseLeave={e => mouseleave(e, coding_1)} name="contact">
                        <ContactHover ref={coding_1}>✍️</ContactHover>
                        Messenger
                        <ContactButtons>
                            <ContactButton href="#">WRITE TO ME <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.24793 26.8651L6.18727 27.9258L8.30859 30.0471L9.36925 28.9864L7.24793 26.8651ZM9.36925 28.9864L25.9863 12.3694L23.8649 10.2481L7.24793 26.8651L9.36925 28.9864Z" fill="#757575"/><path d="M8.30859 11.3086H24.9256V27.9256" stroke="#757575" strokeWidth="3" strokeLinecap="square"/></svg></ContactButton>
                        </ContactButtons>
                    </ContactItem>
                    <ContactItem onMouseOver={e => mousemove(e, coding_2)} onMouseLeave={e => mouseleave(e, coding_2)}>
                        <ContactHover ref={coding_2}>📬</ContactHover>
                        Email
                        <ContactButtons>
                            <ContactButton href="#">HKRUKCONTACT@GMAIL.COM <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.24793 26.8651L6.18727 27.9258L8.30859 30.0471L9.36925 28.9864L7.24793 26.8651ZM9.36925 28.9864L25.9863 12.3694L23.8649 10.2481L7.24793 26.8651L9.36925 28.9864Z" fill="#757575"/><path d="M8.30859 11.3086H24.9256V27.9256" stroke="#757575" strokeWidth="3" strokeLinecap="square"/></svg></ContactButton>
                        </ContactButtons>
                    </ContactItem>
                    <ContactItem onMouseOver={e => mousemove(e, coding_3)} onMouseLeave={e => mouseleave(e, coding_3)}>
                        <ContactHover ref={coding_3}>🤵🏻‍♂️</ContactHover>
                        Linkedin
                        <ContactButtons>
                            <ContactButton href="#">WRITE TO ME <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.24793 26.8651L6.18727 27.9258L8.30859 30.0471L9.36925 28.9864L7.24793 26.8651ZM9.36925 28.9864L25.9863 12.3694L23.8649 10.2481L7.24793 26.8651L9.36925 28.9864Z" fill="#757575"/><path d="M8.30859 11.3086H24.9256V27.9256" stroke="#757575" strokeWidth="3" strokeLinecap="square"/></svg></ContactButton>
                        </ContactButtons>
                    </ContactItem>
                    <ContactItem onMouseOver={e => mousemove(e, coding_4)} onMouseLeave={e => mouseleave(e, coding_4)}>
                        <ContactHover ref={coding_4}>👨🏻‍🎨</ContactHover>
                        Behance
                        <ContactButtons>
                            <ContactButton href="#">WATCH MY WORKS <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.24793 26.8651L6.18727 27.9258L8.30859 30.0471L9.36925 28.9864L7.24793 26.8651ZM9.36925 28.9864L25.9863 12.3694L23.8649 10.2481L7.24793 26.8651L9.36925 28.9864Z" fill="#757575"/><path d="M8.30859 11.3086H24.9256V27.9256" stroke="#757575" strokeWidth="3" strokeLinecap="square"/></svg></ContactButton>
                        </ContactButtons>
                    </ContactItem>
                    <ContactItem onMouseOver={e => mousemove(e, coding_5)} onMouseLeave={e => mouseleave(e, coding_5)}>
                        <ContactHover ref={coding_5}>✏️</ContactHover>
                        Dribbble
                        <ContactButtons>
                            <ContactButton href="#">WATCH MY WORKS <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.24793 26.8651L6.18727 27.9258L8.30859 30.0471L9.36925 28.9864L7.24793 26.8651ZM9.36925 28.9864L25.9863 12.3694L23.8649 10.2481L7.24793 26.8651L9.36925 28.9864Z" fill="#757575"/><path d="M8.30859 11.3086H24.9256V27.9256" stroke="#757575" strokeWidth="3" strokeLinecap="square"/></svg></ContactButton>
                        </ContactButtons>
                    </ContactItem>
                    <ContactItem onMouseOver={e => mousemove(e, coding_6)} onMouseLeave={e => mouseleave(e, coding_6)}>
                        <ContactHover ref={coding_6}>👨🏻‍💻</ContactHover>
                        Github
                        <ContactButtons>
                            <ContactButton href="#">LOOK AT MY CODE <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.24793 26.8651L6.18727 27.9258L8.30859 30.0471L9.36925 28.9864L7.24793 26.8651ZM9.36925 28.9864L25.9863 12.3694L23.8649 10.2481L7.24793 26.8651L9.36925 28.9864Z" fill="#757575"/><path d="M8.30859 11.3086H24.9256V27.9256" stroke="#757575" strokeWidth="3" strokeLinecap="square"/></svg></ContactButton>
                        </ContactButtons>
                    </ContactItem> */}
                </div>
            </div>
        </>
    )
}

export default Contact;