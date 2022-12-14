// This file was generated by RedwoodJS
import * as Cell from './HomeCell'
import type { CellProps } from '@redwoodjs/web'
import type { HomeQuery, HomeQueryVariables } from 'types/graphql'

type SuccessType = typeof Cell.Success

export * from './HomeCell'

type CellInputs = CellProps<SuccessType, HomeQuery, typeof Cell, HomeQueryVariables>

export default function (props: CellInputs): ReturnType<SuccessType>
