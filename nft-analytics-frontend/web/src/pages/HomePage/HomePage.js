import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import HomeCell from 'src/components/HomeCell'

import './index.css'
import '../../index.css'

const HomePage = ({ appName }) => {
  return (
    <>
      <MetaTags title="One Labs" description="Dashboard" />
      <div className="flex gap-4">
        <div>
          <aside className="w-64" aria-label="Menu">
            <div className="p-10">
              <h1 className="text-2xl">NFT Analytics</h1>
            </div>
            <div className="light:bg-gray-800 min-h-screen overflow-y-auto rounded bg-gray-50 py-4 px-3">
              <ul className="space-y-2">
                <li>
                  <Link
                    className={`flex items-center rounded-lg p-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${appName === 'mintbase.near' || appName === undefined
                      ? 'bg-gray-700'
                      : ''
                      }`}
                    to={routes.app({ appName: 'mintbase.near' })}
                  >
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://paras-cdn.imgix.net/bafkreid2zne2yfhy43bskanoqk4j5ss5bmxutq32x3crcnfuruw3miei34?w=800&auto=format,compress"
                      alt="freaky elves"
                    />
                    <span
                      className={`ml-3 flex-1 whitespace-nowrap hover:text-white ${appName === 'mintbase.near' || appName === undefined
                        ? 'text-white'
                        : 'text-stone-900 '
                        }`}
                    >
                      Freaky Elves by Spin
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`flex items-center rounded-lg p-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${appName === 'mintbase.near' || appName === undefined
                      ? 'bg-gray-700'
                      : ''
                      }`}
                    to={routes.app({ appName: 'mintbase.near' })}
                  >
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://paras-cdn.imgix.net/bafybeigc6z74rtwmigcoo5eqcsc4gxwkganqs4uq5nuz4dwlhjhrurofeq?w=200&auto=format,compress"
                      alt="antisocial ape club"
                    />
                    <span
                      className={`ml-3 flex-1 whitespace-nowrap hover:text-white ${appName === 'mintbase.near' || appName === undefined
                        ? 'text-white'
                        : 'text-stone-900 '
                        }`}
                    >
                      Antisocial Ape Club
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`flex items-center rounded-lg p-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${appName === 'mintbase.near' || appName === undefined
                      ? 'bg-gray-700'
                      : ''
                      }`}
                    to={routes.app({ appName: 'mintbase.near' })}
                  >
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://paras-cdn.imgix.net/bafkreigynjl2dymbl42lm746rfy3gejgpo6xddcqaa75jku4u42ifig2wa?w=800&auto=format,compress"
                      alt="secret skellies society"
                    />
                    <span
                      className={`ml-3 flex-1 whitespace-nowrap hover:text-white ${appName === 'mintbase.near' || appName === undefined
                        ? 'text-white'
                        : 'text-stone-900 '
                        }`}
                    >
                      Secret Skellies Society
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`flex items-center rounded-lg p-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${appName === 'mintbase.near' || appName === undefined
                      ? 'bg-gray-700'
                      : ''
                      }`}
                    to={routes.app({ appName: 'mintbase.near' })}
                  >
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://paras-cdn.imgix.net/bafkreibql42tly53kang244kjdaqityi246w37qubgujxeeuloma7lbx6u?w=200&auto=format,compress"
                      alt="nearton nft"
                    />
                    <span
                      className={`ml-3 flex-1 whitespace-nowrap hover:text-white ${appName === 'mintbase.near' || appName === undefined
                        ? 'text-white'
                        : 'text-stone-900 '
                        }`}
                    >
                      NEARton
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`flex items-center rounded-lg p-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${appName === 'mintbase.near' || appName === undefined
                      ? 'bg-gray-700'
                      : ''
                      }`}
                    to={routes.app({ appName: 'mintbase.near' })}
                  >
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://paras-cdn.imgix.net/bafkreidixsebqzucoj3sbwpt3xnogteirtqwhkifzflc72oy5qtkk3rgku?w=200&auto=format,compress"
                      alt="near tinker union"
                    />
                    <span
                      className={`ml-3 flex-1 whitespace-nowrap hover:text-white ${appName === 'mintbase.near' || appName === undefined
                        ? 'text-white'
                        : 'text-stone-900 '
                        }`}
                    >
                      Near Tinker Union
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`flex items-center rounded-lg p-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${appName === 'mintbase.near' || appName === undefined
                      ? 'bg-gray-700'
                      : ''
                      }`}
                    to={routes.app({ appName: 'mintbase.near' })}
                  >
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://paras-cdn.imgix.net/bafkreie4ohxbaz4ocr6eddrfmfivfb3d67uymefuy4ubuh2qijodtrpgee?w=200&auto=format,compress"
                      alt="nearnauts"
                    />
                    <span
                      className={`ml-3 flex-1 whitespace-nowrap hover:text-white ${appName === 'mintbase.near' || appName === undefined
                        ? 'text-white'
                        : 'text-stone-900 '
                        }`}
                    >
                      NEARNauts
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`flex items-center rounded-lg p-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${appName === 'mintbase.near' || appName === undefined
                      ? 'bg-gray-700'
                      : ''
                      }`}
                    to={routes.app({ appName: 'mintbase.near' })}
                  >
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://paras-cdn.imgix.net/bafkreia7dh2h2na6illth2ekzjntujw6npxfyhisxzjkanzog5wqfeicqy?w=200&auto=format,compress"
                      alt="battle boars gen 0"
                    />
                    <span
                      className={`ml-3 flex-1 whitespace-nowrap hover:text-white ${appName === 'mintbase.near' || appName === undefined
                        ? 'text-white'
                        : 'text-stone-900 '
                        }`}
                    >
                      Battle Boars Gen 0
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        <div className="flex-grow">
          <div className="p-4 pb-0">
            <HomeCell appName={appName || 'mintbase.near'} />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
