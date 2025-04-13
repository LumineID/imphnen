import { defineComponent } from "vue";

export default defineComponent({
    props: {
        command: {
            type: String,
            required: true
        }
    },
    setup(props) {
        return () => (
            <p class="text-red-600">
                {props.command} : The term '{props.command}' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the
                spelling of the name, or if a path was included, verify that the path is correct and try again.
            </p>
        )
    }
})