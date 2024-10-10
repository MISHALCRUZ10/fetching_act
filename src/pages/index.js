import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then((res) =>
        res.json(),
      ),
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
console.log(data.data)
const user_data = data.data
  return (
    <Table>
  <TableCaption>.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Nation</TableHead>
      <TableHead>Population</TableHead>
      <TableHead>Year</TableHead>
      <TableHead className="text-right">(data.Nation)</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">(data.Population)</TableCell>
      <TableCell>(data.Nation)</TableCell>
      <TableCell>(data.Population)</TableCell>
        <TableCell>(data.Year)</TableCell>
      <TableCell className="text-right">(data.Year)</TableCell>
    </TableRow>
  </TableBody>
</Table>

   
  )

}