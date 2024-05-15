import Vektor from "../../public/Vector/Vector 6.svg";
import Image from "next/image";
import Logo from "../../public/LOGO/Group 4.svg";
import Button from "./components/ButtonForm/Button";
import Button1 from "./components/Button Selengkapnya/Button";
import Save from "../../public/Vector/Save.svg";


const Home = () => {
  return (
    <section className=" scroll-smooth text-white ">
      <div className=" container">
        <div className=" flex flex-wrap">
          <div className="w-full self-center">
            <div className=" relative">
              <div className=" absolute w-24 h-24 mt-16 right-0 bg-green-new rounded-full"></div>
            </div>
            <div className=" relative">
              <div className=" absolute w-24 h-24 mt-1 -left-16 bg-green-new rounded-full"></div>
            </div>
            <div className=" w-full h-[240px] rounded-b-[30px] backdrop-blur-xl border-b-2 shadow-white shadow-inner">
              <Image
                src={Logo}
                width={294}
                alt="Logo Pmb"
                className=" left-0 right-0 mx-auto"
              />
            </div>
            <div className=" px-4 py-7">
              <div className=" relative">
                <div className=" absolute w-20 h-20 bg-green-new rounded-full -z-10 blur-xl left-36"></div>
              </div>
              <div>
                <h1 className="text-xl font-montserrat font-extrabold text-green-new">
                  Selamat Datang Putra Putri
                </h1>
                <h1 className="text-xl font-montserrat font-extrabold text-green-new">
                  Smkn 2 Kabupaten Tangerang
                </h1>
                <p className="font-montserrat text-[9px]">
                  Selamat Datang juga untuk calon anggota
                </p>
                <p className="font-montserrat text-[9px]">
                  Paskibra Smkn 2 Kabupaten Tangerang, Segera Daftarkan
                </p>
                <p className="font-montserrat text-[9px]">
                  Diri anda di bawah ini, untuk bergabung dan menjadi bagian
                  dari kami
                </p>
                <div className=" py-4 px-4">
                  <Button />
                </div>

                <div className=" py-28">
                  <div className=" relative">
                    <div className=" absolute blur-lg -z-10 w-12 h-12 mt-1 left-60 right-14 mx-auto bg-green-new rounded-full"></div>
                  </div>
                  <div className=" left-0 right-0 font-montserrat backdrop-blur-xl mx-auto shadow-inner shadow-white/25 py-2 w-64 border border-white/25 rounded-2xl text-center">
                    <h1 className="text-green-new font-extrabold text-sm">
                      INFO SEPUTAR{" "}
                      <span className=" text-white">PASKIBRAKA</span>
                    </h1>
                    <p className=" text-[10px]">
                      Sumber :
                      <a
                        href="https://paskibraka.bpip.go.id/"
                        className=" text-green-new text-[10px]"
                      >
                        https://paskibraka.bpip.go.id/
                      </a>
                    </p>
                  </div>
                  <div className=" py-20">
                    <div className=" relative">
                      <div className=" absolute -z-10 w-10 h-10 bg-green-new rounded-full blur-xl left-5"></div>
                    </div>
                    <div className=" relative">
                      <div className=" absolute -z-10 w-10 h-10 bg-green-new rounded-full blur-xl -left-3 top-[17rem]"></div>
                      <Image
                        src={Save}
                        width={20}
                        height={20}
                        alt="Save"
                        className=" absolute mt-[280px]"
                      />
                    </div>
                    <div className=" flex">
                      <Image
                        src={Vektor}
                        width={44}
                        height={80}
                        alt="vektor"
                        className=" py-2"
                      />
                      <div className=" flex-row-reverse">
                        <div>
                          <div className=" flex shadow-black shadow-xl rounded-2xl ">
                            <h1 className=" border border-white/25 shadow-white/25 backdrop-blur-xl shadow-inner rounded-2xl py-2 px-4 text-sm font-bold font-montserrat text-green-new">
                              PROFIL
                              <span className=" text-white"> PASKIBRAKA</span>
                            </h1>
                          </div>
                          <div className=" relative mt-2 w-60 mx-4">
                            <p className=" absolute text-[10px] ">
                              Berdasarkan Peraturan Presiden Nomor 51 tahun 2022
                              tentang Program Paskibraka, pembentukan Paskibraka
                              tidak disiapkan sebatas untuk menaikkan dan
                              menurunkan bendera pusaka pada peringatan Hari
                              Ulang Tahun Kemerdekaan Republik Indonesia, tetapi
                              menjadi suatu program pengkaderan calon pemimpin
                              bangsa yang berkarakter Pancasila. Sistem
                              pembinaan dalam pemusatan pendidikan dan pelatihan
                              terdiri dari pembelajaran aktif ideologi Pancasila
                              dan pemantapan nilai wawasan kebangsaan, pelatihan
                              yang terdiri dari pelatihan kepemimpinan dan
                              pelatihan baris-berbaris, serta pengasuhan untuk
                              membentuk generasi yang tangguh, mandiri, dan
                              berkarakter Pancasila. Dengan pola pembinaan di
                              atas diharapkan dapat meningkatkan pengetahuan dan
                              pemahaman mengenai kebangsaan. Dengan demikian,
                              para Paskibraka siap menjadi calon pemimpin bangsa
                              masa depan yang memiliki jiwa nasionalisme dan
                              berjiwa Pancasila.
                            </p>
                          </div>
                        </div>
                        <div className=" mt-[30rem]">
                          <div className=" flex shadow-black shadow-xl rounded-2xl ">
                            <h1 className=" border border-white/25 shadow-white/25 backdrop-blur-xl shadow-inner rounded-2xl py-2 px-4 text-sm font-bold font-montserrat text-green-new">
                              SEJARAH
                              <span className=" text-white"> PASKIBRAKA</span>
                            </h1>
                          </div>
                          <div className=" relative mt-2 mx-4">
                            <p className=" absolute text-[10px] ">
                              Husein Mutahar, pendiri Paskibraka Gagasan
                              Paskibraka lahir pada tahun 1946, pada saat ibu
                              kota Indonesia dipindahkan ke Yogyakarta.
                              Memperingati HUT Proklamasi Kemerdekaan RI yang
                              ke-1, Presiden Soekarno memerintahkan salah satu
                              ajudannya, Mayor (Laut) Husein Mutahar, untuk
                              menyiapkan pengibaran bendera pusaka di halaman
                              Istana Gedung Agung Yogyakarta.
                            </p>
                          </div>
                          <div className=" relative">
                            <div className=" absolute mt-36 px-4">
                              <Button1 />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" py-28">
                  <div className=" relative">
                    <div className=" absolute blur-lg -z-10 w-12 h-12 mt-1 left-56 right-14 mx-auto bg-green-new rounded-full"></div>
                  </div>
                  <div className=" left-0 right-0 font-montserrat backdrop-blur-xl mx-auto shadow-inner shadow-white/25 py-2 w-48 border border-white/25 rounded-2xl text-center">
                    <h1 className="text-green-new font-extrabold text-sm">
                      INFO <span className=" text-white">PASKO</span>
                    </h1>
                  </div>
                  <div className=" py-20">
                    <div className=" relative">
                      <div className=" mx-5 flex-row-reverse">
                        <div>
                          <div className=" flex shadow-black shadow-xl rounded-2xl ">
                            <h1 className=" border border-white/25 shadow-white/25 backdrop-blur-xl shadow-inner rounded-2xl py-2 px-4 text-sm font-bold font-montserrat text-green-new">
                              PENGERTIAN
                              <span className=" text-white"> PASKO</span>
                            </h1>
                          </div>
                          <div className=" relative  mt-2 w-full mx-4">
                            <p className=" absolute text-[10px] ">
                              PASKO adalah Singkatan dari Paskibra Sekolah,
                              paskibra sekolah merupakan organisasi di sekolah
                              yang tugas nya sama dengan paskibraka yaitu
                              mengibarkan bendera sang saka merah putih, namun
                              ada sedikit berbeda tugasnya dengan paskibra
                              sekolah.
                            </p>
                          </div>
                        </div>
                        <div className=" mt-[10rem]">
                          <div className=" flex shadow-black shadow-xl rounded-2xl ">
                            <h1 className=" border border-white/25 shadow-white/25 backdrop-blur-xl shadow-inner rounded-2xl py-2 px-4 text-sm font-bold font-montserrat text-green-new">
                              MANFAAT IKUT
                              <span className=" text-white"> PASKO</span>
                            </h1>
                          </div>
                          <div className=" relative w-full mt-2 mx-4">
                            <div className=" absolute text-[10px]">
                              Mengikuti Paskibra Di Sekolah memiliki manfaat,
                              seperti :
                              <li>
                                Meningkatkan rasa kebanggaan dan patriotisme,
                              </li>
                              <li>
                                Mengembangkan kedisplinan dan tanggung jawab
                                disekolah,
                              </li>
                              <li>
                                Memperkuat Keterampilan Kepemimpinan dan
                                kerjasama tim,
                              </li>
                              <li>Menumbuhkan rasa kepercayaan diri,</li>
                              <li>
                                Memberikan kesempatan untuk berpartisipasi dalam
                                berbagai kegiatan sosial dan kegiatan
                                masyarakat.
                              </li>
                            </div>
                          </div>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home