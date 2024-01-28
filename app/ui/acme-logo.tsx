import { CodeBracketIcon } from '@heroicons/react/24/outline';
import {quickSand} from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${quickSand.className} flex flex-row items-center leading-none text-white`}
    >
      <CodeBracketIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[34px] ml-3"> NEXT.js</p>

    </div>
  );
}
