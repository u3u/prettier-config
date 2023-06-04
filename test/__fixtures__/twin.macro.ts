// @ts-nocheck
import {extendConfig,defineConfig,withSortPlugin} from "../../src/utils"
import {type Options} from 'prettier'
import type{Config} from 'prettier'
import tw from 'twin.macro'

export const styles = tw`display[block] inline inline1 [display:block]`

export const Button = tw.button`sm:bg-red-100 sm:[display:inline] sm:hover:w-10 sm:hover:mt-4 sm:hover:before:p-4`
