interface Props {
  activeCount: number;
}

function TodoCounter({ activeCount }: Props) {
  return (
    <div className='col'>{activeCount === 1 ? "1 task left" : `${activeCount} tasks left`}</div>
  );
}

export default TodoCounter;
