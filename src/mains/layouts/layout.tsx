import { TbWind, TbSun, TbTemperature, TbCloud, TbSunrise, TbSunset } from 'react-icons/tb'
import {
  coreConstants,
  dateHelper,
  Footer,
  formatHelper,
  Header,
  SearchBar,
  Spinner,
  useCurrentLocation
} from '@/modules/core'
import { CardLg, CardSm } from '@/modules/home'
import React from 'react'

const Layout = () => {
  const { data, loading, setData } = useCurrentLocation()

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      {data.map(currentLocation => (
        <div
          key={currentLocation.city_name}
          className="relative container mx-auto p-6 lg:rounded-2xl bg-white-alpha md:h-screen  lg:h-80% xl:h-80% sm:h-screen h-screen w-full shadow-lg shadow-gray-100 dark:shadow-darken dark:bg-black-alpha"
        >
          <Header
            city_name={currentLocation.city_name}
            country_code={currentLocation.country_code}
          />
          <main className="mx-auto mt-14 flex items-center flex-col gap-4 justify-center">
            <aside>
              <SearchBar setData={setData} />
            </aside>
            <article className="flex flex-col items-stretch justify-around">
              <section className="flex flex-col justify-center items-center">
                <span className="text-gray-500 dark:text-gray-300 text-sm">
                  {dateHelper.currentDate(currentLocation.ob_time)}
                </span>
                <img
                  className="w-20 md:w-28"
                  src={coreConstants.ICON_URL.replace(':ICON_CODE', currentLocation.weather.icon)}
                  alt={currentLocation.weather.description}
                />
                <h2 className="text-7xl md:text-8xl font-bold">
                  {formatHelper.temperature(currentLocation.app_temp)}
                </h2>
                <p className="text-2xl text-gray-500 dark:text-gray-300">
                  {currentLocation.weather.description}
                </p>
              </section>
              <section className="mt-10 grid md:gap-3 md:grid-cols-4 grid-cols-2 gap-4">
                <CardSm
                  title="Wind"
                  icon={<TbWind />}
                  value={formatHelper.windSpeed(currentLocation.wind_spd)}
                  type="wind"
                />
                <CardSm title="Index UV" icon={<TbSun />} value={currentLocation.uv} type="uv" />
                <CardSm
                  title="Temp"
                  icon={<TbTemperature />}
                  value={formatHelper.temperature(currentLocation.temp)}
                  type="temp"
                />
                <CardSm
                  title="Clouds"
                  icon={<TbCloud />}
                  value={currentLocation.clouds}
                  type="clouds"
                />
              </section>

              <section className="flex gap-2 mt-10">
                <CardLg icon={<TbSunrise />} title="Sunrise" value={currentLocation.sunrise} />
                <CardLg icon={<TbSunset />} title="Sunset" value={currentLocation.sunset} />
              </section>
            </article>
          </main>
          <Footer />
        </div>
      ))}
    </>
  )
}

export default Layout
