import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"
type Props = {
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,

}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /, '').trim() as SelectedPage

    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? 'text-yellow-300 text-lg' : 'text-blue-400 text-lg'}
                transition duration-500 hover:text-yellow-100
            `}
            href = {`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

export default Link
