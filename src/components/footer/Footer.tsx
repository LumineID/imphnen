import { defineComponent } from "vue";
import { TWColor } from "@/types";
import Badge from "../badge/Badge";
import TextTitle from "../text-title/TextTitle";
import Input from "../input/Input";
import Button from "../button/Button";


export const FOOTER_PROGRAMING_LANGUAGE: Array<{ name: string, color: TWColor, source: string }> = [
    {
        name: "PHP",
        color: "red",
        source: "https://www.php.net/"
    },
    {
        name: "Java",
        color: "green",
        source: "https://www.java.com/"
    },
    {
        name: "Javascript",
        color: "teal",
        source: "https://id.wikipedia.org/wiki/JavaScript"
    },
    {
        name: "Ruby",
        color: "red",
        source: "https://www.ruby-lang.org/"
    },
    {
        name: "Python",
        color: "yellow",
        source: "https://www.python.org/"
    },
    {
        name: "Golang",
        color: "cyan",
        source: "https://go.dev/"
    },
]

export default defineComponent({
    setup() {
        return () => (
            <footer class="mt-20">
            <div class="border-t border-b border-gray-500 flex justify-center">
                <div class="md:grid md:grid-cols-2 gap-3 pb-8">
                    <div class="text-center">
                        <TextTitle
                            class="my-8"
                            text="imphnen"
                        />
                        <p class="text-base font-semibold">
                            Ingin Menjadi Programmer Handal Namun Enggan Ngoding
                        </p>
                        <p class="text-sm text-gray-400">
                            Sesuai dengan nama komunitasya. malas ngoding kebanyakan anggotanya sibuk scroll fesnuk.
                        </p>
                    </div>
                    <div class="text-center">
                        <TextTitle
                            class="my-8"
                            text="bahasa favorit"
                        />
                        <div class="grid grid-cols-3 content-center gap-2">
                            {FOOTER_PROGRAMING_LANGUAGE.map((item, index) => (
                                <Badge
                                    key={index}
                                    text={item.name}
                                    color={item.color}
                                    actionLink={item.source}
                                />
                            ))}
                        </div>
                    </div>
                    <div class="text-center">
                        <TextTitle
                            class="my-8"
                            text="langganan"
                        />
                        <p class="text-sm text-gray-400 mb-2">
                            Dengan berlangganan kamu akan mendapatkan pemberitahuan tentang pembaruan dari kami.
                        </p>
                        <p class="text-sm text-gray-400 mb-2">
                            kami tidak membagikan Email kamu.
                        </p>
                        <Input
                            class="py-5"
                            label="Email Kamu"
                            placeholder="imphnen@gmail.com"
                        />
                        <div class="flex justify-center">
                            <Button
                                color="blue"
                                outline
                                text="Langganan Sekarang"
                                rounded
                            />
                        </div>
                    </div>
                    <div class="text-center">
                        <TextTitle
                            class="my-8"
                            text="hubungi kami"
                        />
                        <p class="text-sm text-gray-400">
                            Hubungi kami dibawah jika kamu perlu bantuan
                        </p>
                        <div class="py-5 flex justify-center">
                            <div class="flex gap-3 text-2xl text-gray-400 cursor-pointer">
                                <a
                                    href="https://www.facebook.com/groups/programmerhandal"
                                    target="_blank"
                                    class="p-2 rounded-full border-2 border-gray-400 hover:scale-105 hover:rotate-12 hover:text-blue-400 hover:border-blue-400"
                                >
                                    <b-icon-facebook />
                                </a>
                                <a
                                    href="https://www.instagram.com/imphnen.dev"
                                    target="_blank" class="p-2 rounded-full border-2 border-gray-400 hover:scale-105 hover:rotate-12 hover:text-blue-400 hover:border-blue-400"
                                >
                                    <b-icon-instagram />
                                </a>
                                <a
                                    href="https://discord.gg/W4XyRAmPSD"
                                    target="_blank"
                                    class="p-2 rounded-full border-2 border-gray-400 hover:scale-105 hover:rotate-12 hover:text-blue-400 hover:border-blue-400"
                                >
                                    <b-icon-discord />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-10 text-center">
                <span class="me-2">&#169;</span>
                <span class="uppercase me-2">{new Date().getFullYear()} Imphnen -</span>
                <span>Ingin menjadi programmer handal namun enggan ngoding</span>
            </div>
        </footer>
        )
    }
})