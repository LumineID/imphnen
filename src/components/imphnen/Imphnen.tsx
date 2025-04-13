import { defineComponent } from "vue";
import { DateTimes } from "@/types";
import Layout from "../layout/Layout";
import Card from "@/components/card/Card";
import TextTitle from "@/components/text-title/TextTitle";
import Button from "@/components/button/Button";
import DateTime from "../datetime/DateTime";
import CardComunity from "../card/CardComunity";
import CardFeature from "../card/CardFeature";
import CardUserReview from "../card/CardUserReview";
import CardSourceLearning from "../card/CardSourceLearning";

export default defineComponent({
    emits: {
        close: () => true
    },
    setup(props, { emit}) {
        return () => (
            <Layout
                title="imphnen.exe"
                onClose={() => emit("close")}
            >
                <section class="lg:grid lg:grid-cols-2">
                    <div class="mx-auto">
                        <div class="flex justify-center items-center mb-10">
                            <img src="/logo.png" width="228" height="228" />
                        </div>
                        <div class="text-center text-4xl md:text-5xl uppercase tracking-wide text-white">
                            Ingin Menjadi
                        </div>
                        <div class="text-center text-2xl md:text-5xl uppercase tracking-wide text-blue-400 mt-3">
                            Programmer Handal?
                        </div>
                        <div class="flex justify-center mt-10">
                            <Card class="sm:w-[25rem] lg:w-[27rem] w-80 rotate-6 p-0">
                                <div class="flex p-2 gap-2">
                                    <div class="p-[.30rem] rounded-full bg-red-600" />
                                    <div class="p-[.30rem] rounded-full bg-amber-600" />
                                    <div class="p-[.30rem] rounded-full bg-green-600" />
                                </div>
                                <div class="p-2">
                                    <div class="flex gap-4">
                                        <div class="flex justify-end text-gray-400">1</div>
                                        <div class="text-green-600">{"<?php"}</div>
                                    </div>
                                    <div class="flex gap-4">
                                        <div class="flex justify-end text-gray-400">2</div>
                                        <div></div>
                                    </div>
                                    <div class="flex gap-4">
                                        <div class="flex justify-end text-gray-400">3</div>
                                        <div><span class="text-blue-400">echo</span> <span class="text-amber-400">"Namun Enggan Ngoding"</span>;</div>
                                    </div>
                                    <div class="flex gap-4">
                                        <div class="flex justify-end text-gray-400">4</div>
                                        <div></div>
                                    </div>
                                    <div class="flex gap-4">
                                        <div class="flex justify-end text-gray-400">5</div>
                                        <div class="text-green-600">{"?>"}</div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div class="text-center mt-5 w-96 break-words mx-auto">
                            <span class="text-xl mr-2 uppercase font-bold">Imphnen</span>
                            <span class="text-md me-2">Adalah komunitas Programmer yang isinya orang-orang pengen jago coding (katanya). Namun enggan ngoding</span>
                            <span class="text-md">Tapi di Imphnen gak sedikit orang yang jago coding loh.</span>
                        </div>
                        <div class="grid grid-cols-2 gap-4 my-7 p-3 border-b border-gray-500">
                            <div class="border-e border-gray-500">
                                <h1 class="font-bold text-3xl flex justify-start">200Rb</h1>
                                <div class="text-sm text-gray-400">Seluruh anggota Imphnen</div>
                            </div>
                            <div>
                                <h1 class="font-bold text-3xl flex justify-start">90%</h1>
                                <div class="text-sm text-gray-400">Anggota yang enggan ngoding dari total 200Rb anggota.</div>
                            </div>
                        </div>
                        <div class="flex gap-3">
                            <Button
                                color="blue"
                                text="Gabung Sekarang"
                                size="lg"
                                actionLink="https://www.facebook.com/groups/programmerhandal"
                                rounded
                            />
                            <Button
                                color="gray"
                                text="Pelajari Selengkapnya"
                                size="lg"
                                rounded
                                outline
                            />
                        </div>
                    </div>
                    <div class="flex justify-center items-center mt-32">
                        <div class="relative max-w-96">
                            <TextTitle
                                class="absolute bottom-64 left-16 my-8"
                                text="Pengingat"
                            />
                            <Card class="w-80" rounded>
                                <div class="w-full rounded-xl bg-gray-500 p-3 mt-5">
                                    <h2 class="font-semibold text-white">Jangan Lupa Produktif</h2>
                                    <p class="text-gray-200 text-xs">
                                        Sudahi dulu scroll Fesnuknya waktunya mengkoding :v
                                    </p>
                                    <div class="bg-gray-300 text-center rounded-md pb-5 py-3 my-3">
                                        <div class="text-gray-700 font-semibold mb-2">
                                            Waktu
                                        </div>
                                        <div class="bg-blue-500/30 text-blue-500 rounded-xl flex justify-center mx-5">
                                            <div class="flex gap-1 items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                                </svg>
                                                <DateTime>
                                                    {{
                                                        default: (date: DateTimes) => (
                                                            <span>{date.hour}:{date.minute}:{date.second}</span>
                                                        )
                                                    }}
                                                </DateTime>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <div class="absolute left-60 bottom-48 z-10 rotate-[-10deg] rounded-md text-sm bg-gray-800/50 w-36 mt-5 ms-5 backdrop-blur-md border-2 border-gray-500 break-words p-2">
                                <p>Belajar coding itu mudah siapa yang bilang sulit hanya saja saya malas</p>
                                <p class="mt-3">- programmer malas</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="my-10">
                    <div class="text-2xl text-gray-200 font-bold text-center">
                        Apa Aja di IMPHNEN?
                    </div>
                    <div class="text-base text-center">
                        Berikut hal yang mungkin dapat anda temukan dikomunitas Imphnen
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                        <CardFeature
                            class="my-5"
                            title="Anggota Ramah"
                            description="Imphnen mempunyai orang-orang yang ramah dan selalu siap membantu. Jangan ragu untuk bertanya atau berbagi pengalaman coding di komunitas kami."
                            icon={<b-icon-person-hearts />}
                        />
                        <CardFeature
                            class="my-5"
                            title="Pemecahan Masalah"
                            description="Jangan sungkan untuk bertanya tentang kendala coding yang kamu hadapi. Kami siap membantu!"
                            icon={<b-icon-bug-fill />}
                        />
                        <CardFeature
                            class="my-5"
                            title="Hiburan"
                            description="Tidak hanya coding Imphnen juga punya hiburan atau meme seputar dunia teknologi. Kamu bisa menemukan banyak hal menarik di sini!"
                            icon={<b-icon-chat-right-dots />}
                        />
                    </div>
                </section>

                <section class="my-10">
                    <TextTitle
                        class="mb-5 "
                        text="komunitas kami"
                        size="lg"
                    />
                    <div class="text-base text-center">
                        Bergabung dengan kami di platform sosial media untuk mendapatkan informasi terbaru dan berbagi pengalaman coding.
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                        <CardComunity
                            color="blue"
                            title="Facebook"
                            description="Gabung di grup Facebook kami untuk mendapatkan informasi terbaru dan berbagi pengalaman coding."
                            btnText="Gabung Grup"
                            icon={<b-icon-facebook />}
                            onClick={() => window.open("https://www.facebook.com/groups/programmerhandal", "_blank")}
                        />
                        <CardComunity
                            color="pink"
                            title="Instagram"
                            description="Ikuti kami di Instagram untuk mendapatkan tips dan trik seputar dunia teknologi."
                            btnText="Follow Instagram"
                            icon={<b-icon-instagram />}
                            onClick={() => window.open("https://www.instagram.com/imphnen.dev", "_blank")}
                        />
                        <CardComunity
                            color="blue"
                            title="Discord Server"
                            description="Diskusi dan berbagi pengalaman coding di server Discord kami."
                            btnText="Gabung Discord"
                            icon={<b-icon-discord />}
                            onClick={() => window.open("https://discord.gg/W4XyRAmPSD", "_blank")}
                        />
                    </div>
                </section>

                <section class="my-10">
                    <TextTitle
                        class="mb-5 "
                        text="sumber belajar"
                        size="lg"
                    />
                    <div class="text-base text-center">
                        Akses berbagai sumber belajar coding yang kami rekomendasikan untuk kamu
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                        <CardSourceLearning
                            title="Vidio Tutorial"
                            description="Belajar melalui vidio tutorial yang kami rekomendasikan. Mulai dari pemula hingga mahir."
                            icon={<b-icon-file-play-fill />}
                            btnText="Lihat Tutorial"
                        />
                        <CardSourceLearning
                            color="yellow"
                            title="Artikel & Tutorial"
                            description="Pelajari konsep dasar pemrograman melalui artikel dan tutorial yang kami rekomendasikan."
                            icon={<b-icon-book />}
                            btnText="Baca Artikel"
                        />
                        <CardSourceLearning
                            color="red"
                            title="Tantangan Coding"
                            description="Uji kemampuanmu dengan tantangan coding yang kami sediakan. Mulai dari level pemula hingga mahir."
                            icon={<b-icon-puzzle-fill />}
                            btnText="Mulai Tantangan"
                        />
                        <CardSourceLearning
                            color="green"
                            title="Berbagi Sesi"
                            description="Ikuti sesi berbagi pengalaman dari anggota Imphnen. Belajar dari pengalaman orang lain adalah cara yang baik untuk belajar."
                            icon={<b-icon-person-plus-fill />}
                            btnText="Jadwal Sesi"
                        />
                    </div>
                </section>

                <section class="my-10 rounded-3xl bg-gray-900 border-2 border-gray-500 py-5 px-3 md:px-6">
                    <TextTitle
                        class="mb-5 "
                        text="ulasan anggota"
                        size="lg"
                    />
                    <div class="text-base text-center">
                        Apa kata mereka tentang imphnen?
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
                        <CardUserReview
                            author="Alina"
                            message="Imphnen adalah komunitas yang sangat membantu saya dalam belajar coding. Banyak orang yang siap membantu dan berbagi pengalaman."
                            rating={5}
                        />
                        <CardUserReview
                            author="Gilang"
                            message="Awalnya susah belajar coding, tapi setelah bergabung di Imphnen saya jadi lebih semangat. Banyak orang yang siap membantu dan berbagi pengalaman."
                            rating={5}
                        />
                        <CardUserReview
                            author="Toni"
                            message="Saya jadi malas belajar coding setelah bergabung di Imphnen. Banyak orang yang hanya berbagi meme dan tidak serius berbagi ilmu."
                            rating={1}
                        />
                        <CardUserReview
                            author="Adelia"
                            message="Lumayan lah, banyak orang yang siap membantu dan berbagi pengalaman. Tapi kadang juga ada yang hanya berbagi meme."
                            rating={3}
                        />
                    </div>
                </section>
            </Layout>
        )
    }
})