import Link from 'next/link'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const BackToAllBtn = (props) => {
    const { text } = props

    return (
        <Link href={`/${text.toLowerCase()}`} passHref className="border border-solid border-[red] text-[red] rounded px-3 py-2">
            <ArrowBackOutlinedIcon />
            Back to all {text}
        </Link>
    )
}

export default BackToAllBtn;